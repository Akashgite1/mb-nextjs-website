"use client";

import { useState } from "react";

interface LinkItem {
  label: string;
  url: string;
}

interface Node {
  title: string;
  links?: LinkItem[];
  children?: Node[];
}

export default function TreeNode({ node }: { node: Node }) {
  const [open, setOpen] = useState(true);

  return (
    <div className="ml-4">
      <div
        className="cursor-pointer font-semibold flex items-center text-black"
        onClick={() => setOpen(!open)}
      >
        <span className="mr-1">{open ? "▾" : "▸"}</span>
        {node.title}
      </div>

      {open && (
        <div className="ml-4 mt-1 space-y-1">
          {node.links?.map((link) => (
            <a
              key={link.url}
              href={link.url}
              className="block text-blue-600 underline hover:text-blue-800"
              target="_blank"
              rel="noreferrer"
            >
              {link.label}
            </a>
          ))}

          {node.children?.map((child, idx) => (
            <TreeNode key={idx} node={child} />
          ))}
        </div>
      )}
    </div>
  );
}
