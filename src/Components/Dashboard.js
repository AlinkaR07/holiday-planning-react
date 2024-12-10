import React, { useEffect, useState} from 'react';
import { Layout, Image, Button, Progress, Tooltip, Menu } from 'antd';
import { PlusOutlined, GiftOutlined, ContactsOutlined, ShopOutlined, WalletOutlined, ProfileOutlined, CalendarOutlined, CommentOutlined, TeamOutlined, BulbOutlined, MailOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

import Logo from '../pictures/Logo Icon.png';
import ImBlock1 from '../pictures/Image-container.png'
import '../Styles/Layout.css';

const { Header, Content, Footer } = Layout;

const eventOptions = [
  { key: '1', label: 'Новый год 2025', date: '2024-12-31T20:00:00' },
  { key: '2', label: 'Свадьба', date: '2024-12-20T15:00:00' },
  { key: '3', label: 'Корпоратив', date: '2024-12-25T18:30:00' },
];

const Dashboard = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const [selectedEvent, setSelectedEvent] = useState(eventOptions[0]);
  const [current, setCurrent] = useState('1');
  const [countdown, setCountdown] = useState(0); // начальное время в секундах

  useEffect(() => {
    // Устанавливаем начальное значение таймера
    const calculateTimeLeft = () => {
      const eventDate = new Date(selectedEvent.date).getTime();
      const now = new Date().getTime();
      return Math.max(0, Math.floor((eventDate - now) / 1000)); // Разница в секундах
    };
    setCountdown(calculateTimeLeft());

    // Запускаем таймер
    const timer = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [selectedEvent]);


  const formatTime = (seconds) => {
    const days = Math.floor(seconds / (24 * 3600));
    const hours = Math.floor((seconds % (24 * 3600)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return `${days} дн. ${hours.toString().padStart(2, '0')} ч. ${minutes
      .toString()
      .padStart(2, '0')} м. ${secs.toString().padStart(2, '0')} с.`;
  };

  const handleLogout = () => {
    setIsAuth(false); 
    navigate('/'); 
  };

  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
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
            <div className="header-blok1">Давайте займемся организацией вашего мероприятия</div>
            <Button className="login-button-blok1">
              Создать мероприятие <PlusOutlined />
            </Button>
          </div>
          <Image className="image-blok1" width={560} height={306} preview={false} src={ImBlock1} />
        </div>
        <div className='content-menu'>
              <div className='text-menu'>
                    <div className='menu-blok'>Меню</div>
                    <div className="menu-underline"></div>
                    <div className='columns-menu'>
                        <div className='column1-menu'>
                            <div className='tab-menu'>
                                <GiftOutlined className='event-button'/>
                                <div className='tab-menu-text' onClick={()=> navigate('/events')}>Мероприятия</div>
                            </div>
                            <div className='tab-menu' >
                                <ContactsOutlined className='event-button'/>
                                <div className='tab-menu-text' onClick={()=> navigate('/gosts')}>Гости</div>
                            </div>
                        </div>
                        <div className='column1-menu'>
                            <div className='tab-menu'>
                                <ShopOutlined className='event-button'/>
                                <div className='tab-menu-text'  onClick={()=> navigate('/contractors')}>Подрядчики</div>
                            </div>
                            <div className='tab-menu'>
                                <WalletOutlined className='event-button'/>
                                <div className='tab-menu-text' onClick={()=> navigate('/budget')}>Бюджет</div>
                            </div>
                        </div>
                        <div className='column1-menu'>
                            <div className='tab-menu'>
                                <ProfileOutlined className='event-button'/>
                                <div className='tab-menu-text' onClick={()=> navigate('/tasks')}>Задачи</div>
                            </div>
                            <div className='tab-menu'>
                                <CalendarOutlined className='event-button-gray'/>
                                <div className='tab-menu-text-gray'>Расписание</div>
                            </div>
                        </div>
                        <div className='column1-menu'>
                            <div className='tab-menu'>
                                <TeamOutlined className='event-button-gray'/>
                                <div className='tab-menu-text-gray'>Помощники</div>
                            </div>
                            <div className='tab-menu'>
                                <CommentOutlined className='event-button-gray'/>
                                <div className='tab-menu-text-gray'>Сообщения</div>
                            </div>
                        </div>
                    </div>
              </div>
        </div>
        <div className='content-resume'>
              <div className='text-resume'>
                    <div className='resume-blok'>Сводка</div>
                    <div className="resume-underline"></div>
                    <div className='resume-event'>
                        <div className='resume-event-header'>
                                <GiftOutlined className='resume-event-header-button'/>
                                <div className='resume-event-header-text'>Мероприятия</div>
                        </div>
                        <div className="resume-underline-header"></div>
                        <div className='resume-name-event'>{selectedEvent.label}</div>
                        <div className='resume-date-event'>31.12.2024, Ваше мероприятие</div>
                        <div className="countdown-timer">
                          <div className="timer-display">{formatTime(countdown)}</div>
                        </div>
                    </div>
                    <div className='resume-event'>
                        <div className='resume-event-header'>
                            <ProfileOutlined className='resume-event-header-button'/>
                            <div className='resume-event-header-text'>Задачи</div>
                        </div>
                        <div className="resume-underline-header"></div>
                        <div className='text-task-full'>
                            <div className='text-task'>Составить меню</div>
                            <div className='text-task-date'>15.12.2024</div>
                        </div>
                        <div className="resume-underline-header"></div>
                        <Tooltip title="1 выполнена / 1 в ожидании">
                            <Progress className='progress-tast' strokeLinecap="butt" size={["120%", 20]} showInfo={false} percent={100} strokeColor={{'0%': '#F77567', '50%': '#F77567', '50.1%': '#FEC04C', '100%': '#FEC04C'}}/>
                        </Tooltip>
                        <div className='text-task-podpis'>
                            <div className='text-task-podpis-pr'>50% выполнено</div>
                            <div className='text-task-kol-podpis'>1 из 2</div>
                        </div>
                    </div>
                    <div className='resume-two-event'>
                        <div className='resume-two-gost'>
                            <div className='resume-gost-header'>
                                    <ContactsOutlined className='resume-gost-header-button'/>
                                    <div className='resume-gost-header-text'>Гости</div>
                            </div>
                            <div className="resume-gost-underline-header"></div>
                            <Tooltip title="2 подтверждено / 1 в ожидании / 1 отклонено">
                                <Progress className='progress-gost' type="circle" strokeLinecap="butt" size={[300]} strokeWidth={[20]} showInfo={false} percent={100} strokeColor={{'0%': '#F77567', '50%': '#F77567', '50.1%': '#FEC04C', '75%': '#FEC04C', '75.1': '#FE954C', '100%': '#FE954C'}}/>
                            </Tooltip>
                            <div className='tooltip-gost'>
                                <div className='tooltip-gost-icon1'> </div>
                                <div className='text-tooltip-gost'>2 подтверждено</div>
                                <div className='tooltip-gost-icon2'> </div>
                                <div className='text-tooltip-gost'>1 в ожидании</div>
                                <div className='tooltip-gost-icon3'> </div>
                                <div className='text-tooltip-gost'>1 отклонено</div>
                            </div>
                        </div>
                        <div className='resume-two-gost'>
                            <div className='resume-gost-header'>
                                    <ShopOutlined className='resume-gost-header-button'/>
                                    <div className='resume-gost-header-text'>Подрядчики</div>
                            </div>
                            <div className="resume-gost-underline-header"></div>
                            <Tooltip title="1 забронировано / 0 в ожидании / 0 отклонено">
                                <Progress className='progress-gost' type="circle" strokeLinecap="butt" size={[300]} strokeWidth={[20]} showInfo={false} percent={100} strokeColor={{'0%': '#F77567', '100%': '#F77567'}}/>
                            </Tooltip>
                            <div className='tooltip-gost'>
                                <div className='tooltip-gost-icon1'> </div>
                                <div className='text-tooltip-gost'>1 забронировано</div>
                                <div className='tooltip-gost-icon2'> </div>
                                <div className='text-tooltip-gost'>0 в ожидании</div>
                                <div className='tooltip-gost-icon3'> </div>
                                <div className='text-tooltip-gost'>0 отклонено</div>
                            </div>
                        </div>
                    </div>
                    <div className='resume-event'>
                      <div className='resume-event-header'>
                        <WalletOutlined className='resume-event-header-button' />
                        <div className='resume-event-header-text'>Бюджет</div>
                      </div>
                      <div className="resume-underline-header"></div>
                      <div className='tooltip-budget'>
                        <div className='budget-row'>
                          <div className='budget-item'>Бюджет</div>
                          <div className='budget-value'> 
                            <div className='tooltip-budget-icon1'/>
                              30 000 рублей
                            </div>
                        </div>
                        <div className='budget-row'>
                          <div className='budget-item'>Оплачено</div>
                          <div className='budget-value'> 
                            <div className='tooltip-budget-icon2'/>
                              1 000 рублей
                            </div>
                        </div>
                        <div className='budget-row'>
                          <div className='budget-item'>В ожидании</div>
                          <div className='budget-value'>
                            <div className='tooltip-budget-icon3'/>
                              0 рублей
                            </div>
                        </div>
                      </div>
                      <div className="resume-underline-header"></div>
                      <div className='tooltip-budget'>
                        <div className='budget-row'>
                          <div className='budget-item-ost'>Остаток</div>
                          <div className='budget-value-ost'>
                            <div className='tooltip-budget-icon4'/>
                              29 000 рублей
                            </div>
                        </div>
                      </div>
                    </div>
              </div>
        </div>
        <div className='content-sovet'>
              <div className='text-menu'>
                    <div className='menu-blok'>Советы</div>
                    <div className="menu-underline"></div>
                    <div className='text-sovet'>
                        <BulbOutlined className='sovet-icon'/>
                        Прежде чем начинать планировать, определите, сколько вы можете потратить на праздник. Это поможет вам сузить выбор и избежать ненужных трат.
                    </div>
                    <div className='text-sovet'>
                        <BulbOutlined className='sovet-icon'/>
                        Разбейте планирование на этапы, чтобы не упустить важные детали. Например, составьте список гостей, меню, необходимых покупок и украшений.
                    </div>
                    <div className='text-sovet'>
                        <BulbOutlined className='sovet-icon'/>
                        Спросите своих гостей, что им нравится, какие у них есть диетические ограничения или аллергии. Это поможет вам создать меню, которое понравится всем.
                    </div>
                    <div className='text-sovet'>
                        <BulbOutlined className='sovet-icon'/>
                        Планы могут меняться, поэтому важно быть готовым к неожиданностям. Не бойтесь импровизировать и не переживайте о мелких недочетах. 
                    </div>
              </div>
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

export default Dashboard;
