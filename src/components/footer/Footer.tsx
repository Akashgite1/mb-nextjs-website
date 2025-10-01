import Link from "next/link"

export default function Footer() {
    return (
        <footer className='bg-gray-900 text-white py-8'>
            <div className='container mx-auto px-4'>
                <div className='grid grid-cols-1 md:grid-cols-5 gap-8'>
                    {/* Logo and Copyright Section */}
                    <div className='col-span-1'>
                        <div className='mb-4'>
                            <h2 className='text-xl font-bold'>
                                Home for Corporate people
                            </h2>
                        </div>
                        <p className='text-sm text-gray-400'>
                            © 2025 Code. All rights reserved
                        </p>
                    </div>

                    {/* Products Section */}
                    <div className='col-span-1'>
                        <h3 className='text-lg fon</div>t-semibold mb-4'>
                            Products
                        </h3>
                        <ul className='space-y-2'>
                            <li>
                                <Link
                                    href='/courses'
                                    className='text-gray-400 hover:text-white'
                                >
                                    Courses
                                </Link>
                            </li>
                            {/* <li>
                                <Link
                                    href='/cohorts'
                                    className='text-gray-400 hover:text-white'
                                >
                                    Cohorts
                                </Link>
                            </li> */}
                            {/* <li><Link href="/udemy" className="text-gray-400 hover:text-white">Udemy</Link></li> */}
                            {/* <li><Link href="/masterji" className="text-gray-400 hover:text-white">Masterji</Link></li> */}
                            {/* <li><Link href="/freeapi" className="text-gray-400 hover:text-white">FreeAPI</Link></li> */}
                        </ul>
                    </div>

                    {/* Resources Section */}
                    <div className='col-span-1'>
                        <h3 className='text-lg font-semibold mb-4'>
                            Resources
                        </h3>
                        <ul className='space-y-2'>
                            <li>
                                <Link
                                    href='/docs'
                                    className='text-gray-400 hover:text-white'
                                >
                                    Docs
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='/privacy'
                                    className='text-gray-400 hover:text-white'
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                            {/* <li><Link href="/terms" className="text-gray-400 hover:text-white">Terms of Service</Link></li> */}
                            {/* <li><Link href="/pricing" className="text-gray-400 hover:text-white">Pricing Policy</Link></li> */}
                            {/* <li><Link href="/refund" className="text-gray-400 hover:text-white">Refund Policy</Link></li> */}
                        </ul>
                    </div>

                    {/* Social Section */}
                    <div className='col-span-1'>
                        <h3 className='text-lg font-semibold mb-4'>Social</h3>
                        <ul className='space-y-2'>
                            <li>
                                <Link
                                    href='https://x.com/manohar_batra'
                                    className='text-gray-400 hover:text-white flex items-center gap-2'
                                >
                                    <svg
                                        className='w-4 h-4'
                                        viewBox='0 0 24 24'
                                        fill='currentColor'
                                    >
                                        <path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' />
                                    </svg>
                                    X.com
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='https://github.com/manoharbatra'
                                    className='text-gray-400 hover:text-white flex items-center gap-2'
                                >
                                    <svg
                                        className='w-4 h-4'
                                        fill='currentColor'
                                        viewBox='0 0 24 24'
                                    >
                                        <path d='M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z' />
                                    </svg>
                                    GitHub
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href='https://www.linkedin.com/in/manoharbatra/'
                                    className='text-gray-400 hover:text-white flex items-center gap-2'
                                >
                                    <svg
                                        className='w-4 h-4'
                                        fill='currentColor'
                                        viewBox='0 0 24 24'
                                    >
                                        <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
                                    </svg>
                                    LinkedIn
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='https://www.instagram.com/career.manoharbatrayt'
                                    className='text-gray-400 hover:text-white flex items-center gap-2'
                                >
                                    <svg
                                        className='w-4 h-4'
                                        fill='currentColor'
                                        viewBox='0 0 24 24'
                                    >
                                        <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' />
                                    </svg>
                                    Instagram
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Video Platforms Section */}
                    <div className='col-span-1'>
                        <h3 className='text-lg font-semibold mb-4'>
                            Video Platforms
                        </h3>
                        <ul className='space-y-2'>
                            {/* <li>
                                <Link
                                    href='/discord'
                                    className='text-gray-400 hover:text-white flex items-center gap-2'
                                >
                                    <svg
                                        className='w-4 h-4'
                                        fill='currentColor'
                                        viewBox='0 0 24 24'
                                    >
                                        <path d='M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.369-.444.85-.608 1.23a18.566 18.566 0 0 0-5.487 0 12.36 12.36 0 0 0-.617-1.23A.077.077 0 0 0 8.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026 13.83 13.83 0 0 0 1.226-1.963.074.074 0 0 0-.041-.104 13.175 13.175 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028zM8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38zm7.975 0c-1.183 0-2.157-1.069-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38z' />
                                    </svg>
                                    Discord
                                </Link>
                            </li> */}

                            {/* <li><Link href="/youtube" className="text-gray-400 hover:text-white flex items-center gap-2">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                </svg>
                                YouTube Hindi
                            </Link></li> */}

                            {/* <li><Link href="/youtube-en" className="text-gray-400 hover:text-white flex items-center gap-2">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                </svg>
                                YouTube English
                            </Link></li> */}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}
