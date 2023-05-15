import "./assets/css/chat.css"
import { io } from 'socket.io-client';
import { useState, useEffect } from 'react'

const socket = io("ws://localhost:3000")

function Chat() {
    const [messages, setMesages] = useState([])
    const [input, setInput] = useState('')
    const [isConnected, setIsConnected] = useState(socket.connected);
    const [fooEvents, setFooEvents] = useState([]);
    const onMessageSend = () => {
        socket.emit('message', input)
        setInput('')
    }

    useEffect(() => {
        function onConnect() {
        setIsConnected(true);
        }
        function onMessage(message) {
            setMesages(m => [...m, message])
        }
        function onDisconnect() {
        setIsConnected(false);
        }

        function onFooEvent(value) {
        setFooEvents(previous => [...previous, value]);
        }

        socket.on('connect', onConnect);
        socket.on('disconnect', onDisconnect);
        socket.on('foo', onFooEvent);
        socket.on('message', onMessage)

        return () => {
        socket.off('connect', onConnect);
        socket.off('disconnect', onDisconnect);
        socket.off('foo', onFooEvent);
        socket.off('message', onMessage)
        };
    }, []);

  return (
    <div className="container">
        <div className="page-title">
            <div className="row gutters">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <h5 className="title">Chat App</h5>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"> </div>
            </div>
        </div>
        <div className="content-wrapper">
            <div className="row gutters">
    
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
    
                    <div className="card m-0">
                        <div className="row no-gutters">
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-3 col-3">
                                <div className="users-container">
                                    <div className="chat-search-box">
                                        <div className="input-group">
                                            <input className="form-control" placeholder="Search"/>
                                            <div className="input-group-btn">
                                                <button type="button" className="btn btn-info">
                                                    <i className="fa fa-search"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <ul className="users">
                                        <li className="person" data-chat="person1">
                                            <div className="user">
                                                <img src="https://memepedia.ru/wp-content/uploads/2020/02/zhak-fresko-citaty-mem.png" alt="Retail Admin"/>
                                                <span className="status busy"></span>
                                            </div>
                                            <p className="name-time">
                                                <span className="name">Жак Фреско</span>
                                                <span className="time">15/02/2019</span>
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-9 col-9">
                                <div className="selected-user">
                                    <span>To: <span className="name">Жак Фреско</span></span>
                                </div>
                                <div className="chat-container">
                                    <ul className="chat-box chatContainerScroll">
                                        {messages.map(m => (
                                            <li className="chat-left" key={m}>
                                            <div className="chat-avatar">
                                                <img src="https://i2.wp.com/fnewshub.com/wp-content/uploads/2021/10/IMG_20211024_002834.jpg" alt="Retail Admin"/>
                                                <div className="chat-name">Лена</div>
                                            </div>
                                            <div className="chat-text">{m}</div>
                                        </li>
                                        ))}
                                    </ul>
                                    <div id="jopa" className="form-group mt-3 mb-0">
                                        <textarea  className="form-control" rows="3" placeholder="Type your message here..." value={input} onChange={(e) => setInput(e.target.value)}></textarea>
                                        <button onClick={onMessageSend}>Отправить</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    
                </div>
    
            </div>
    
        </div>
    
    </div>
  )
}

export default Chat
