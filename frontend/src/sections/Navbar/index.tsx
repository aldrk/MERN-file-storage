import React, { FC } from "react"
import style from "./style.module.scss"
import Logo from "../../components/Logo"
import Container from "../../components/Container"
import Authorization from "./Authorization"



const Navbar: FC = () => {
  return (
    <nav className={style.navbar}>
      <Container className={style.navbarContainer}>
        <Logo />
        <Authorization />
      </Container>
    </nav>
  );
};

export default Navbar