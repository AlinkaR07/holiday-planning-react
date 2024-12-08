import React, { useState } from 'react';
import { Layout, Button, Image } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import LoginModal from './LoginModal';

import Logo from '../pictures/Logo Icon.png';
import ImBlock1 from '../pictures/Image-container.png'
import ImBlock2 from '../pictures/Image-container2.png'
import ImBlock3 from '../pictures/Work Together Image.png'
import ImBlock4 from '../pictures/Image container3.png'
import ImBlock5 from '../pictures/Image container4.png'
import ImBlock6 from '../pictures/Image container5.png'
import '../Styles/Layout.css';


const { Header, Content, Footer } = Layout;

const HomePage = ({ setIsAuth }) => {
  const [isLoginModal, setIsLoginModal] = useState(false);

  const openLoginModal = () => {
    setIsLoginModal(true);
  };

  const handleCancelLoginModal = () => {
    setIsLoginModal(false);
  };

  return (
    <Layout>
      <Header className="header">
        <div className="div-logo-name-app">
          <Image width={37} height={29} preview={false} src={Logo} />
          <div className="div-name-app">Праздник</div>
          <Button className="login-button" onClick={openLoginModal}>
            Войти
          </Button>
        </div>
      </Header>
      <Content className="content">
        {/* Блоки контента */}
        <div className="content-blok1">
          <div className="text-blok1">
            <div className="header-blok1">Ваши мероприятия</div>
            <div className="text-desc-blok1">
              Наше приложение - ваш верный помощник в организации любых мероприятий...
            </div>
            <Button className="login-button-blok1" onClick={openLoginModal}>
              Войдите в личный кабинет <ArrowRightOutlined />
            </Button>
          </div>
          <Image className="image-blok1" width={560} height={306} preview={false} src={ImBlock1} />
        </div>
        <div className='content-blok2'>
              <div className='text-blok2'>
                    <div className='header-blok2'>Создание мероприятия</div>
                    <div className='text-desc-blok2'>
                    Легко планируйте и создавайте мероприятия с помощью интуитивно понятного интерфейса. Укажите дату, время и тип мероприятия, чтобы начать подготовку.
                    </div>
                    <Button className='login-button-blok2' onClick={openLoginModal}>Начать<ArrowRightOutlined/></Button>
              </div>
              <Image className='image-blok2' width={350} height={250} preview={false} src={ImBlock2}/>
            </div>
            <div className='content-blok3'>
              <Image className='image-blok3' width={433} height={393} preview={false} src={ImBlock3}/>
              <div className='text-blok3'>
                    <div className='header-blok3'>Добавление гостей</div>
                    <div className='text-desc-blok3'>
                    Управляйте своими гостями, добавляя их в приложение и распределяя по категориям и столам. Учитывайте предпочтения и определяйте индивидуальное меню для каждого гостя.
                    </div>
              </div>
            </div>
            <div className='content-blok4'>
              <div className='text-blok1'>
                    <div className='header-blok1'>Добавление подрядчиков</div>
                    <div className='text-desc-blok1'>
                    Найдите и добавьте подрядчиков, таких как рестораны, ведущие, аниматоры и другие специалисты. Удобно отслеживайте их контактные данные и статусы сотрудничества.
                    </div>
                    <Button className='login-button-blok2' onClick={openLoginModal}>Начать<ArrowRightOutlined/></Button>
              </div>
              <Image className='image-blok4' width={350} height={250} preview={false} src={ImBlock4}/>
            </div>
            <div className='content-blok5'>
              <Image className='image-blok3' width={433} height={393} preview={false} src={ImBlock5}/>
              <div className='text-blok3'>
                    <div className='header-blok3'>Управление бюджетом</div>
                    <div className='text-desc-blok3'>
                    Контролируйте расходы на ваше мероприятие с помощью встроенного инструмента управления бюджетом. Настраивайте лимиты и отслеживайте, чтобы оставаться в рамках запланированных затрат.
                    </div>
              </div>
            </div>
            <div className='content-blok6'>
              <div className='text-blok2'>
                    <div className='header-blok2'>Расписание</div>
                    <div className='text-desc-blok2'>
                    Создавайте и отслеживайте задачи для каждого этапа подготовки. Установите сроки и напоминания, чтобы ничего не упустить в процессе организации вашего праздника.
                    </div>
                    <Button className='login-button-blok2' onClick={openLoginModal}>Начать<ArrowRightOutlined/></Button>
              </div>
              <Image className='image-blok2' width={350} height={300} preview={false} src={ImBlock6}/>
            </div>
          </Content>
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
      <LoginModal setIsAuth={setIsAuth} visible={isLoginModal} onCancel={handleCancelLoginModal} />
    </Layout>
  );
};

export default HomePage;
