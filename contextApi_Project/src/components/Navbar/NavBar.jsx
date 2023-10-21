import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Dropdown,
} from "@nextui-org/react";
import { Badge, Button } from "@nextui-org/react";
import { NotificationIcon } from "../Icon/NotificationIcon";
import Cards from "../Cards/Cards";

function NavBar() {
  
  const image = "https://source.unsplash.com/featured/1080x720";
  return (
    <>
      <div className="container mx-auto">
        <Navbar>
          <NavbarBrand>
            <p className="font-bold text-inherit">ContextApi Learning </p>
          </NavbarBrand>

          <NavbarContent className="hidden sm:flex gap-4" justify="center">
            <NavbarItem isActive>
              <Link to="#" aria-current="page" color="secondary">
                Products
              </Link>
            </NavbarItem>
          </NavbarContent>

          <NavbarContent as="div" justify="end">
            <Dropdown placement="bottom-end">
              <Badge content={0} shape="circle" color="danger">
                <Button
                  radius="full"
                  isIconOnly
                  ariaLabel="more than 99 notifications"
                  variant="light"
                >
                  <NotificationIcon size={24} />
                </Button>
              </Badge>
            </Dropdown>
          </NavbarContent>
        </Navbar>

        <div className="container justify-center gap-4 mx-auto flex flex-wrap ">
          <Cards use={{image}} />
        </div>
      </div>
    </>
  );
}

export default NavBar;
