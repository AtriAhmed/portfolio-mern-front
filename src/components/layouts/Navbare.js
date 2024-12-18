import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { IonIcon } from '@ionic/react'
import { logoGithub, logoLinkedin } from 'ionicons/icons'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Work', href: '#work' },
  { name: 'Contact', href: '#contact' },
  { name: 'CV', href: '#cv' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-black text-white fixed w-full z-50" >
      {({ open }) => (
        <>
          <div className=" mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center ml-10 sm:ml-0">
                  <strong className='flex gap-2'><span className='text-yellow-500'>Ahmed Atri</span><span>|</span> <span>Fullstack Developer</span></strong>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <AnchorLink
                        key={item.name}
                        href={item.href}
                        className={() =>
                          classNames('hover:bg-gray-700 hover:text-white', 'px-3 py-2 rounded-md text-sm font-medium transition duration-300')
                        }
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </AnchorLink>
                    ))}
                  </div>
                </div>
                <div className='ml-auto flex gap-3'>
                  <a href='https://github.com/AtriAhmed' target="_blank" rel='noreferrer' className='font-bold flex items-center justify-between gap-1'><IonIcon icon={logoGithub} className='text-xl' /> <span className='hidden sm:block'>Github</span></a>
                  <a href='https://www.linkedin.com/in/ahmed-atri-5564601b2' target="_blank" rel='noreferrer' className='font-bold flex items-center justify-between gap-1'><IonIcon icon={logoLinkedin} className='text-xl' /> <span className='hidden sm:block'>Linkedin</span></a>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={AnchorLink}
                  href={item.href}
                  className={classNames(
                    'hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}