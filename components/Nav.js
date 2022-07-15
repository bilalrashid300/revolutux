import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import ReactFlagsSelect from "react-flags-select";
import { Link as ScrollLink } from "react-scroll";
import { useTranslation } from "next-i18next";
import { getCode, getCodeForFlag } from "../helper/utilityHelper";

const Nav = () => {
  const { locale } = useRouter();
  const { t } = useTranslation();
  const [selected, setSelected] = useState(getCodeForFlag(locale));
  const router = useRouter();

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

  const handleLocaleChange = (code) => {
    router.push(router.route, router.asPath, {
      locale: getCode(code),
    });
    setSelected(code);
  };

  const NavDataList = navData.map((item, index) => (
    <ScrollLink
      activeClass="text-black"
      to={item.path}
      spy={true}
      smooth={true}
      offset={item.path === "jobs" ? -40 : 0}
      duration={500}
      className="text-[#56534F] font-medium p-2 md:text-base text-xs rounded-lg flex justify-center items-center cursor-pointer"
      key={index}
    >
      {item.label}
    </ScrollLink>
  ));

  return (
    <nav className="hidden md:flex items-center justify-center w-full fixed top-6 mb-5 z-50 md:px-0 px-3">
      <div className="bg-[#EFEFEE] space-x-9  flex items-center p-2 px-7 rounded-full justify-between">
        <Link href="/">
          <h1 className="font-medium text-lg mr-10 cursor-pointer">
            Revolutu<span className="text-lg text-[#AD53FC]">X</span>
          </h1>
        </Link>
        {NavDataList}
        <ScrollLink className="locale-switcher">
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
        <button className="py-1 px-4 hero-btn ml-10 text-white rounded-md">
          <Link href="/">{t('but_presale')}</Link>
        </button>
      </div>
    </nav>
  );
};

export default Nav;
