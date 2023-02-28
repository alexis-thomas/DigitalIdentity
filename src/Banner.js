import { Link } from "react-router-dom";
import {
  IconHome,
  IconSchool,
  IconNews,
  IconAward,
  IconAddressBook,
  IconArticle,
} from "@tabler/icons-react";
import { NavLink, Text } from "@mantine/core";
import { useLocation } from "react-router-dom";

// simple React function for banner
function Banner(props) {
  let w = document.documentElement.clientWidth || window.innerWidth;
  let mobile = w > 480 ? false : true;

  const icons = [
    IconHome,
    IconSchool,
    // IconNews,
    // IconArticle,
    IconAward,
    IconAddressBook,
  ];

  let pages = [
    { name: "Home", path: "/" },
    { name: "Resume", path: "/resume" },
    // { name: "Research & teaching", path: "/research" },
    // { name: "Articles", path: "/articles" },
    { name: "Awards", path: "/awards" },
    { name: "Contact", path: "/contact" },
  ];

  const location = useLocation();

  return (
    <div className="Banner">
      {pages.map((page) => {
        const Icon = icons[pages.indexOf(page)];
        return (
          //  <Link
          //     style={{ textDecoration: "none" }}
          //     to={page.path}
          //     onClick={() => props.close()}
          //   >
          //     <div className="banner-button">{page.name}</div>
          //   </Link>
          <Link
            onClick={() => {
              if (mobile) {
                props.close();
              }
            }}
            to={page.path}
            style={{ textDecoration: "none" }}
          >
            <NavLink
              label={
                <Text size={"lg"} style={{ paddingRight: "1em" }}>
                  {page.name}
                </Text>
              }
              icon={<Icon size={25} style={{ paddingLeft: "1em" }} />}
              active={
                location.pathname.slice(location.pathname.lastIndexOf("/")) ===
                page.path
              }
            />
          </Link>
        );
      })}
    </div>
  );
}
export default Banner;
