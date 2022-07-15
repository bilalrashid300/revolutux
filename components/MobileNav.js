import Link from "next/link";
import React, { useState } from "react";
import { TbMenu, TbX } from "react-icons/tb";
import { Link as ScrollLink } from "react-scroll";
import { useTranslation } from "next-i18next";
import ReactFlagsSelect from "react-flags-select";
import { getCode, getCodeForFlag } from "../helper/utilityHelper";
import { useRouter } from "next/router";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { locale } = useRouter();
  const { t } = useTranslation();

  const [navData, setNavData] = useState([
    {
      path: "home",
      label: t("nav_home"),
    },
    {
      path: "about",
      label: "How it works",
      label: t("nav_how_it_works"),
    },
    {
      path: "roadmap",
      label: "Roadmap",
      label: t("nav_roadmap"),
    },
    {
      path: "/",
      label: "Whitepaper",
      label: t("nav_whitepaper"),
    },
  ]);

  const [selected, setSelected] = useState(getCodeForFlag(locale));
  const router = useRouter();

  const handleLocaleChange = (code) => {
    router.push(router.route, router.asPath, {
      locale: getCode(code),
    });
    setSelected(code);
  };

  return (
    <nav className="w-full relative md:hidden flex">
      <div className="bg-[#EFEFEE] fixed z-50 border-4 border-black w-full p-2 px-7 flex items-center justify-between">
        <Link href="/">
          <h1 className="font-medium text-lg mr-10 cursor-pointer">
            Revolutu<span className="text-lg text-[#AD53FC]">X</span>
          </h1>
        </Link>

        {!isOpen && (
          <TbMenu
            size={24}
            className="cursor-pointer"
            onClick={() => setIsOpen(true)}
          />
        )}
        {isOpen && (
          <TbX
            size={24}
            className="cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        )}
      </div>

      <main
        className={`gradient-bg p-5 w-full h-full fixed z-30 mt-10 ${
          isOpen ? "active-nav" : "inactive-nav"
        }`}
      >
        {navData.map((item, index) => (
          <ScrollLink
            activeClass="text-black"
            to={item.path}
            spy={true}
            smooth={true}
            offset={item.path === "jobs" ? -40 : 0}
            duration={500}
            className="text-[#d5d5d5] font-bold p-2 md:text-base text-xl rounded-lg flex cursor-pointer"
            key={index}
            onClick={() => setIsOpen(false)}
          >
            {item.label}
          </ScrollLink>
        ))}
        <ScrollLink>
          <ReactFlagsSelect
            selected={selected}
            onSelect={(code) => handleLocaleChange(code)}
            countries={["US", "DE", "ES", "FR", "TR"]}
            customLabels={{
              US: t("lang_english"),
              DE: t("lang_german"),
              ES: t("lang_spanish"),
              FR: t("lang_french"),
              TR: t("lang_turkish"),
            }}
          />
        </ScrollLink>
      </main>
    </nav>
  );
};

export default MobileNav;
