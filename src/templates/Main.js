import { AppConfig } from "../utils/AppConfig"
import { useRouter } from "next/router"
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const montserrat = Montserrat({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const Main = ({ meta, userName, profilePicture, children }) => {
  const router = useRouter()
  function logout() {
    localStorage.removeItem("token")
    router.push("/signIn")
  } 

  return (
    <div className={`${montserrat.className} relative w-full h-full antialiased bg-bg-grey`}>
      {meta}

      {/* <div className="max-w-screen-md mx-auto"> */}
      <div className="mx-auto max-w-full h-screen grid gap-4 z-10 relative grid-rows-[0.5fr,7fr,0.2fr]">
        <header className="fixed z-20 flex items-center w-full h-20 bg-white shadow-md mdlg:h-auto">
          <section className="grid w-full max-w-screen-xl grid-cols-3 mx-auto 3xl:max-w-screen-2xl min-w-min mdlg:px-4">
            <nav
              id="nav"
              className="hidden fixed bottom-0 items-center w-full h-screen text-white mdlg:relative left-full mdlg:left-auto mdlg:h-auto mdlg:text-black mdlg:bottom-auto mdlg:bg-transparent mdlg:max-w-lg mdlg:flex"
            >
              <input className="hidden" type="checkbox" id="hamburgerMenu" name="hamburgerMenu" />
              <label
                htmlFor="hamburgerMenu"
                className="fixed flex items-center justify-center w-16 h-16 bg-black rounded shadow-md cursor-pointer bottom-8 right-4 mdlg:hidden"
                id="hamburgerMenu"
              >
                {" "}
                <div className="" id="menuButtonBurger"></div>
              </label>
              <ul
                id="navlist"
                className="flex flex-col justify-end w-full h-full text-4xl text-center list-none md-w-auto mdlg:text-left mdlg:text-base mdlg:p-0 mdlg:h-auto mdlg:flex-row mdlg:justify-between"
              >
                <li className="mb-0 mdlg:mr-2 mdlg:h-5 mdlg:pb-3.5 mdlg:border-b-8 border-transparent mdlg:hover:border-youngones-green">
                  <Link
                    className="block w-full py-10 font-black mdlg:font-bold mdlg:bg-transparent mdlg:hover:bg-transparent mdlg:p-0 mdlg:w-auto bg-youngones-green hover:bg-black px-14"
                    href="/"
                  >
                    Dashboard
                  </Link>
                </li>
                <li className="mdlg:h-5 mdlg:mx-2 mdlg:pb-3.5 mdlg:border-b-8 border-transparent hover:border-youngones-green">
                  <Link
                    className="block w-full py-10 font-black mdlg:font-bold mdlg:bg-transparent mdlg:hover:bg-transparent mdlg:p-0 mdlg:w-auto bg-youngones-green hover:bg-black px-14"
                    href="/profile"
                  >
                    Profiel
                  </Link>
                </li>
                <li className="mdlg:h-5 mdlg:mx-2 mdlg:pb-3.5 mdlg:border-b-8 border-transparent hover:border-youngones-green">
                  <Link
                    className="block w-full py-10 font-black mdlg:font-bold mdlg:bg-transparent mdlg:hover:bg-transparent mdlg:p-0 mdlg:w-auto bg-youngones-green hover:bg-black px-14"
                    href="/leaderboard"
                  >
                    Tussenstand
                  </Link>
                </li>
                <li className="mdlg:h-5 mdlg:mx-2 mdlg:pb-3.5 mdlg:border-b-8 border-transparent hover:border-youngones-green whitespace-nowrap">
                  <Link
                    className="block w-full py-10 font-black mdlg:font-bold mdlg:bg-transparent mdlg:hover:bg-transparent mdlg:p-0 mdlg:w-auto bg-youngones-green hover:bg-black px-14"
                    href="https://youngones.com/nl/gwoty-spelregels/"
                  >
                    GWOTY
                  </Link>
                </li>

                <li className="mdlg:h-5 mdlg:pb-3.5 mdlg:border-b-8 border-transparent hover:border-youngones-green">
                  <div className="block w-full py-8 font-black mdlg:hidden bg-youngones-green px-14"></div>
                </li>
              </ul>
            </nav>
            <Link className="block justify-self-start mdlg:justify-self-center" href="/">
              <Image
                src="/img/logo.png"
                width="500"
                height="500"
                alt="GWOTY-Logo"
                className="block w-24 py-1 ml-4 justify-self-start mdlg:ml-0 mdlg:justify-self-center mdlg:w-16"
              />
            </Link>
            <div className="block mdlg:hidden"></div>
            <div className="flex items-center mr-4 justify-self-end">
              <Image
                className="object-cover w-8 h-8 my-2 mr-4 rounded-full"
                width="500"
                height="500"
                src={profilePicture}
                alt="profiel afbeelding"
              />
              {/* <<<<<< TODO: PROFIEL FOTO >>>>>> */}
              <div>
                <p className="text-xs">{userName} </p>
                <button className="block text-xs text-youngones-green hover:underline" onClick={() => logout()}>
                  Uitloggen
                </button>
              </div>
            </div>
          </section>
        </header>
        {children}

        <footer className="text-xs text-center bg-bg-grey p-4 lg:p-0 2xl:bg-transparent">
          <p>
            © Copyright {new Date().getFullYear()} {AppConfig.title}
          </p>
          <p className="inline">Bij het meedoen met de GWOTY-awards ga je akkoord met de </p>
          <Link
            href="https://youngones.com/nl/gwoty-algemene-voorwaarden/"
            className="inline font-bold text-youngones-green hover:underline"
          >
            algemene voorwaarden
          </Link>
        </footer>
      </div>
      {/* BACKGROUND  */}
      <div className="fixed bottom-0 right-0 z-0 w-full h-full bg-bg-grey"></div>
      {/* BANNER  */}
      <Image
        width="2000"
        height="2000"
        alt='Background banner image'
        className="absolute z-0 object-cover w-full top-20 md:top-11 h-96 md:h-auto filter blur-xs"
        id="mainBanner"
        src="/img/bannerBlur.png"
      />
      {/* <div className="absolute top-0 z-0 w-full h-64 bg-gray-300"></div> */}
      {/* TRIANGLE  */}
      <div
        className="fixed bottom-0 right-0 z-0 w-2/4 bg-youngones-green md:w-2/5 2xl:w-1/5 h-1/3"
        id="background-art"
      ></div>
    </div>
  )
}

export { Main }
