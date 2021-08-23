import { Avatar, Badge, Dropdown, DropdownMenu, DropdownToggle } from "ui";
import {
Bell,
Cog,
Duplicate,
LightningBolt,
Logout,
MenuAlt1,
Pencil,
Selector,
Translate,
User,
ViewGrid
} from "icons/solid";
import { Check, Search } from "icons/outline";

import Notifications from "./Notifications";
import PropTypes from "prop-types";
import Shortcuts from "./Shortcuts";
import { useAppState } from "components/AppProvider";

const colors = [
  "gray",
  "red",
  "yellow",
  "green",
  "blue",
  "indigo",
  "purple",
  "pink",
];
const Header = ({ toggleOpen }) => {
  const [state, dispatch] = useAppState();

  const handleChange = (e) => {
    dispatch({
      type: e.target.id,
    });
  };

  return (
    <>
      <nav
        className={`bg-white dark:bg-gray-600 shadow-sm z-20 md:z-30 h-header ${
          state.stickyHeader ? "sticky top-0" : "relative"
        }`}
      >
        <div className="w-full mx-auto h-full">
          <div className="relative flex items-center justify-between h-full">
            <a
              className="flex md:hidden items-center flex-shrink-0 px-4 cursor-pointer text-gray-900"
              onClick={toggleOpen}
            >
              <MenuAlt1 width={18} height={18} strokeWidth={2} />
            </a>
            <div className="flex-1 flex items-center justify-start px-4">
              <div className="hidden sm:block">
                <div className="flex">
                  <div className="relative">
                    <label>
                      <input
                        className="appearance-none relative block w-full ltr:pl-0 sm:ltr:pl-8 rtl:pr-0 sm:rtl:pr-8 ltr:pr-3 rtl:pl-3 border-0 border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 leading-none h-5 bg-transparent"
                        placeholder={t("search")}
                      />
                      <span className="absolute top-0 ltr:left-0 rtl:right-0 inline-block hidden sm:block">
                        <Search width={18} height={18} />
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="inset-y-0 right-0 items-center px-4 sm:static sm:inset-auto flex h-full">
              <Dropdown className="px-3 m-0 static sm:relative flex flex-row items-center h-full">
                <DropdownToggle>
                  <ViewGrid width={18} height={18} strokeWidth={2} />
                </DropdownToggle>
                <DropdownMenu className="shortcuts-dropdown px-0 dark:text-gray-800 overflow-hidden right-0 left-0">
                  <Shortcuts title={t("Shortcuts")} />
                </DropdownMenu>
              </Dropdown>
              <Dropdown className="px-3 static sm:relative h-full flex items-center">
                <DropdownToggle className="h-full">
                  <Pencil width={18} height={18} />
                </DropdownToggle>
                <DropdownMenu
                  style={{ minWidth: "350px" }}
                  className="w-full sm:w-auto right-0 left-0"
                >
                  <div className="w-full">
                    <div className="w-full flex flex-row items-center justify-between py-2 px-2 ring-1 ring-black ring-opacity-5">
                      <div className="list-none flex flex-row overflow-auto w-0 min-w-full -mb-10 pb-10">
                        <div
                          className={`text-center py-3 px-3 cursor-pointer flex flex-1`}
                        >
                          <a className="text-gray-900 hover:text-indigo">
                            Settings
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="mt-px rounded-b-lg relative grid gap-6 bg-body px-5 py-6 sm:gap-5 sm:p-5">
                      {Object.keys(state)
                        .filter((option) => {
                          if (
                            option !== "sidebarColor" &&
                            option !== "language" &&
                            option !== "name"
                          )
                            return option;
                        })
                        .map(
                          (option, index) =>
                            option !== "mobile" && (
                              <a
                                key={index}
                                href="#"
                                className={`flex justify-between px-3 py-3 leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out -m-3 ${
                                  option === "rtl" ? "uppercase" : ""
                                }`}
                              >
                                {t(option)}
                                <label
                                  htmlFor={`toggle${option.replace(
                                    /^./,
                                    function (str) {
                                      return str.toUpperCase();
                                    }
                                  )}`}
                                  className="flex items-center cursor-pointer"
                                >
                                  <div
                                    className={`relative ${
                                      state.autoDarkMode &&
                                      option === "darkMode" &&
                                      "opacity-50"
                                    }`}
                                  >
                                    <input
                                      id={`toggle${option.replace(/^./, function (
                                        str
                                      ) {
                                        return str.toUpperCase();
                                      })}`}
                                      type="checkbox"
                                      className="hidden"
                                      checked={state[option]}
                                      onChange={(e) => handleChange(e)}
                                      disabled={
                                        state.autoDarkMode &&
                                        option === "darkMode"
                                      }
                                    />
                                    <div className="toggle__bar h-4 bg-gray-400 rounded-full shadow-inner"></div>
                                    <div className="toggle__handle absolute transform bg-white rounded-full shadow-sm transform transition duration-150 ease-in-out"></div>
                                  </div>
                                </label>
                              </a>
                            )
                        )}

                      <div className="flex justify-between px-3 py-3 leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition-all duration-150 ease-in-out -m-3">
                        <label className="flex items-center cursor-pointer">
                          {t("sidebarColor")}
                        </label>
                      </div>
                      <div className="flex flex-wrap px-3 -m-3">
                        {colors.map((color, index) => (
                          <span
                            className={`w-5 h-5 mx-1 rounded-full cursor-pointer bg-${color}-800 mb-1 relative`}
                            key={index}
                            onClick={() =>
                              dispatch({
                                type: "setSidebarColor",
                                value: color,
                              })
                            }
                          >
                            <span
                              className={`absolute transform ltr:translate-x-1/2 rtl:-translate-x-1/2 translate-y-1/2 w-2 h-2 block rounded-full cursor-pointer ${
                                color === state.sidebarColor
                                  ? "bg-white"
                                  : `bg-${color}-800`
                              }`}
                              style={{
                                marginLeft: !state.rtl ? "2px" : "0",
                                marginRight: state.rtl ? "2px" : "0",
                                marginTop: "2px",
                              }}
                            ></span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </DropdownMenu>
              </Dropdown>

              <Dropdown className="px-3 m-0 static sm:relative flex flex-row items-center h-full">
                <DropdownToggle>
                  <Bell width={18} height={18} strokeWidth={2} />
                  <Badge
                    color="red"
                    className="absolute top-0 ltr:right-0 rtl:left-0 ring-2 ring-white dark:ring-gray-600 h-4"
                    style={{
                      transform: "translate(5px, -5px)",
                    }}
                  >
                    6
                  </Badge>
                </DropdownToggle>
                <DropdownMenu className="notification-dropdown px-0 dark:text-gray-800 overflow-hidden right-0 left-0">
                  <Notifications title={t("notifications")} />
                </DropdownMenu>
              </Dropdown>

              <Dropdown className="px-3 relative h-full flex items-center">
                <DropdownToggle>
                  <Avatar size={28} src={`images/avatar.jpg`} alt={`avatar`} />
                </DropdownToggle>
                <DropdownMenu>
                  <div className="py-1">
                    <a
                      href="#"
                      className="flex items-center px-5 py-3 leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                    >
                      <LightningBolt width={16} height={16} />{" "}
                      <span className="ltr:ml-3 rtl:mr-3">{t("activity")}</span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center px-5 py-3 leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                    >
                      <User width={16} height={16} />{" "}
                      <span className="ltr:ml-3 rtl:mr-3">
                        {t("yourProfile")}
                      </span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center px-5 py-3 leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                    >
                      <Cog width={16} height={16} />{" "}
                      <span className="ltr:ml-3 rtl:mr-3">{t("settings")}</span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center px-5 py-3 leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out border-t border-1 border-gray-100"
                    >
                      <Logout width={16} height={16} />{" "}
                      <span className="ltr:ml-3 rtl:mr-3">{t("signOut")}</span>
                    </a>
                  </div>
                </DropdownMenu>
              </Dropdown>

              <Dropdown className="px-3 relative h-full flex items-center">
                <DropdownToggle>
                  <Translate width={18} height={18} />
                </DropdownToggle>
                <DropdownMenu className="ltr:mr-1 rtl:ml-1">
                  <div className="py-1">
                    <a
                      className="flex items-center px-5 py-3 leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out cursor-pointer"
                      onClick={() => {
                        i18n.changeLanguage("en");
                        dispatch({
                          type: "setLanguage",
                          value: "en",
                        });
                        dispatch({
                          type: "toggleRtl",
                          value: false,
                        });
                      }}
                    >
                      <Check
                        width={16}
                        height={16}
                        className={`${
                          i18n.language === "en" || state.language === "en"
                            ? "opacity-100"
                            : "opacity-0"
                        }`}
                      />{" "}
                      <span className="ltr:ml-3 rtl:mr-3">{t("english")}</span>
                    </a>
                    <a
                      className="flex items-center px-5 py-3 leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out cursor-pointer"
                      onClick={() => {
                        i18n.changeLanguage("ar");
                        dispatch({
                          type: "setLanguage",
                          value: "ar",
                        });
                        dispatch({
                          type: "toggleRtl",
                          value: true,
                        });
                      }}
                    >
                      <Check
                        width={16}
                        height={16}
                        className={`${
                          i18n.language === "ar" || state.language === "ar"
                            ? "opacity-100"
                            : "opacity-0"
                        }`}
                      />{" "}
                      <span className="ltr:ml-3 rtl:mr-3">{t("arabic")}</span>
                    </a>
                    <a
                      className="flex items-center px-5 py-3 leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out cursor-pointer"
                      onClick={() => {
                        i18n.changeLanguage("hi");
                        dispatch({
                          type: "setLanguage",
                          value: "hi",
                        });
                        dispatch({
                          type: "toggleRtl",
                          value: false,
                        });
                      }}
                    >
                      <Check
                        width={16}
                        height={16}
                        className={`${
                          i18n.language === "hi" || state.language === "hi"
                            ? "opacity-100"
                            : "opacity-0"
                        }`}
                      />{" "}
                      <span className="ltr:ml-3 rtl:mr-3">{t("hindi")}</span>
                    </a>
                    <a
                      className="flex items-center px-5 py-3 leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out cursor-pointer"
                      onClick={() => {
                        i18n.changeLanguage("fr");
                        dispatch({
                          type: "setLanguage",
                          value: "fr",
                        });
                        dispatch({
                          type: "toggleRtl",
                          value: false,
                        });
                      }}
                    >
                      <Check
                        width={16}
                        height={16}
                        className={`${
                          i18n.language === "fr" || state.language === "fr"
                            ? "opacity-100"
                            : "opacity-0"
                        }`}
                      />{" "}
                      <span className="ltr:ml-3 rtl:mr-3">{t("french")}</span>
                    </a>
                    <a
                      className="flex items-center px-5 py-3 leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out cursor-pointer"
                      onClick={() => {
                        i18n.changeLanguage("zh");
                        dispatch({
                          type: "setLanguage",
                          value: "zh",
                        });
                        dispatch({
                          type: "toggleRtl",
                          value: false,
                        });
                      }}
                    >
                      <Check
                        width={16}
                        height={16}
                        className={`${
                          i18n.language === "zh" || state.language === "zh"
                            ? "opacity-100"
                            : "opacity-0"
                        }`}
                      />{" "}
                      <span className="ltr:ml-3 rtl:mr-3">{t("chinese")}</span>
                    </a>
                  </div>
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

Header.propTypes = {
  toggleOpen: PropTypes.func,
};

export default Header;
