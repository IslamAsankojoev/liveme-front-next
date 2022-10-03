import React from 'react';
import { Login, Register, BannerArea } from '../index';
import profileText from '../../collections/Profile/registerCollection.json';

export default function LoginRegisterPage() {
  const [toggle, setToggle] = React.useState(true);
  return (
    <>
      <BannerArea title={profileText.page_title} path={'/register'} />
      {toggle ? <Login setToggle={setToggle} /> : <Register setToggle={setToggle} />}
    </>
  );
}
