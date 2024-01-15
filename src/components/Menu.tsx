"use client";
import React from "react";
import { MenuContainer, MenuButton } from "@/style/components/Menu";
import Link from "next/link";
import { House, CurrencyDollar, ArrowArcRight } from "phosphor-react";
import { usePathname } from "next/navigation";

interface IconList {
  [key: string]: React.ReactElement;
}

function Menu() {
  const currentPath = usePathname();

  const listPath = ["/", "/home", "/arrow"];

  function Button({ path }: { path: string }) {
    const isCurrentPath = path === currentPath;
    const focus = isCurrentPath ? "inPage" : "outPage";
    const colorIcon = isCurrentPath ? "#AAAEB9" : "#656A7B";
    const sizeIcon = isCurrentPath ? 24 : 20;

    const iconList: IconList = {
      "/": <House color={colorIcon} weight="fill" size={sizeIcon} />,
      "/home": (
        <CurrencyDollar color={colorIcon} weight="fill" size={sizeIcon} />
      ),
      "/arrow": (
        <ArrowArcRight color={colorIcon} weight="fill" size={sizeIcon} />
      ),
    };

    return (
      <MenuButton focus={focus}>
        <Link href={path}>
          {iconList[path]}
          {isCurrentPath && <span></span>}
        </Link>
      </MenuButton>
    );
  }

  return (
    <MenuContainer>
      <nav>
        <ul>
          {listPath.map((pathName) => (
            <Button key={pathName} path={pathName} />
          ))}
        </ul>
      </nav>
    </MenuContainer>
  );
}

export default Menu;
