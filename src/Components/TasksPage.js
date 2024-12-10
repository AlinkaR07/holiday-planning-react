import React, { useEffect, useState} from 'react';
import { Layout, Image, Button } from 'antd';
import { PlusOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

import Logo from '../pictures/Logo Icon.png';
import ImBlock1 from '../pictures/Image-container.png'
import '../Styles/Layout.css';

const { Header, Content, Footer } = Layout;

const TasksPage = ({ setIsAuth }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsAuth(false); 
    navigate('/'); 
  };

  const handleHome = () => {
    navigate('/dashboard'); 
  };

  return (
    <Layout>
      <Header className="header">
        <div className="div-logo-name-app">
          <Image width={37} height={29} preview={false} src={Logo} />
          <div className="div-name-app">Праздник</div>
          <Button className="login-button" onClick={handleLogout}>
            Выйти
          </Button>
        </div>
      </Header>
      <Content className="content">
        <div className="content-blok1">
          <div className="text-blok1">
            <div className="header-blok1">Здесь записываются все задачи для реализации вашего мероприятия</div>
            <Button className="login-button-blok1" onClick={handleHome}>
            <ArrowLeftOutlined /> Назад 
            </Button>
          </div>
          <Image className="image-blok1" width={560} height={306} preview={false} src={ImBlock1} />
        </div>
        <Footer className='footer'>
            <div className='footer-content'>
              <div className='footer-blok1'>
                <div className='footer-blok1-header'>
                  <Image width={27} height={19} preview={false} src={Logo}></Image>
                  <div className='footer-div-name-app'>Праздник</div>
                </div>
                <div className='footer-blok1-text'>
                Мы стремимся сделать организацию мероприятий простой и увлекательной! Наша команда разработала приложение, которое поможет вам спланировать любое событие, от небольших встреч 
                до масштабных праздников.
                </div>
              </div>
              <div className='footer-blok1'>
                <div className='footer-blok1-header'>
                  <div className='footer-div-name-app'>О нас</div>
                </div>
                <div className='footer-blok1-text'>
                  <div className='footer-blok1-header'>
                    <div className='footer-blok1-text'>Адрес: г.Иваново, ул.Рабфаковская, д.34</div>
                  </div>
                  <div className='footer-blok1-header'>
                    <div className='footer-blok1-text'>Номер телефона: 8(996)918-07-79</div>
                  </div>
                  <div className='footer-blok1-header'>
                    <div className='footer-blok1-text'>E-mail: romanovaalina2003@gmail.com </div>
                  </div>
                </div>
              </div>
              <div className='footer-blok1'>
                <div className='footer-blok1-header'>
                  <div className='footer-div-name-app'>Мы в месенджерах</div>
                </div>
                <div className='footer-blok1-text'>
                  <div className='footer-blok1-header'>
                    <div className='footer-blok1-text'>ВКонтакте: @alinaromanowa</div>
                  </div>
                  <div className='footer-blok1-header'>
                    <div className='footer-blok1-text'>Telegram: @Alinka_0703</div>
                  </div>
                </div>
              </div>
            </div>
            <div className='footer-line'></div>
            <div className='com'>
              Праздник ©{new Date().getFullYear()} 
            </div>
          </Footer>
      </Content>
    </Layout>
  );
};

export default TasksPage;
