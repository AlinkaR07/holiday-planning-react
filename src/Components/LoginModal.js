import React, { useState, useEffect } from "react";
import { Modal, Input } from "antd";
import { UserOutlined, CheckOutlined, ClockCircleOutlined, InfoOutlined } from "@ant-design/icons";

import '../Styles/LoginModal.css'

const LoginModal = ({setIsAuth, visible, onCancel}) => {

    const handleAuth = () => {
        setIsAuth(true);
        onCancel();
      };

    return (
        <Modal 
            className="login-modal"
            open={visible}
            cancelButtonProps={{style: {backgroundColor: 'transparent', borderColor: 'transparent', boxShadow: 'none', textDecoration: 'underline'}}}
            cancelText="Регистрация"
            okButtonProps={{style: {marginRight: '35%', marginTop: '3%', background: 'linear-gradient(to right, #FE9449, #EF5282)'}, onClick: () => {handleAuth()}}}
            okText='Войти'
            title={<span style={{ color: '#043873', fontWeight: 'bold', textAlign: 'center', display: 'block', fontSize: '3vh', marginLeft: '0.6vw' }}>Вход в личный кабинет</span>}
            width={"40vw"}
            onCancel={onCancel}
            centered
            style={{ marginBottom: '15%', alignContent: "center", justifyContent: 'center'}}
        >
            <div className="input-login">
                <div className="text-input">Логин:</div>
                <Input style={{backgroundColor: 'rgba(167, 206, 252, 50)'}}/>
            </div>
            <div className="input-password">
                <div className="text-input">Пароль:</div>
                <Input.Password style={{backgroundColor: 'rgba(167, 206, 252, 50)', color: 'white'}}/>
            </div>
        </Modal>
    )
}

export default LoginModal;