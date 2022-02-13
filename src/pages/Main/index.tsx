import React from "react";
import Logo from "../../components/Logo";
import MainPageContent from "../../components/MainPageContent";

type Props = {};

function Main({}: Props) {
  return (
    <div>
      <Logo />
      <MainPageContent />
    </div>
  );
}

export default Main;
