import React from 'react';
import twitter_logo from './images/twitter.png';
import weibo_logo from './images/weibo.png';
import instagram_logo from './images/instagram.png';
import email_logo from './images/email.png';
import sehun_1 from './images/sehun.jpg';
import picture_logo from './images/picture.png';
import play_logo from './images/play.png';
import locked_logo from './images/locked.png';
import chat_logo from './images/chat.png';
import battery_logo from './images/battery.png';
import door_logo from './images/door.png';
import nuhes_logo from './images/nuhes.png';
import gift_logo from './images/gift.png';
import yt_logo from './images/yt.png';
import sehun1_logo from './images/sehun1.png';
import sehun2_logo from './images/sehun2.png';
import sehun3_logo from './images/sehun3.png';
import './App.css';


function App() {

  document.body.style = 'background: #f9f9f9';
  return (
    <div style={{
      paddingLeft: 150, paddingTop: 50
    }}>

      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <a href={'https://twitter.com/iridescent_boy/'}>
          <img src={twitter_logo} style={{ height: 18, width: 18 }} />
        </a>
        <a href={'https://www.weibo.com/u/3049723347'}>
          <img src={weibo_logo} style={{ height: 18, width: 18, marginLeft: 25 }} />
        </a>
        <a href={'https://www.instagram.com/iridescent_boy/'}>
          <img src={instagram_logo} style={{ height: 18, width: 18, marginLeft: 25 }} />
        </a>
        <a>
          <img src={email_logo} style={{ height: 18, width: 18, marginLeft: 25 }} />
        </a>
      </div>

      <div style={{ display: 'flex', flexDirection: 'row', marginTop: 50 }}>
        <img src={sehun_1} style={{ height: 500, width: 320 }} />
        <div style={{ display: 'flex', flexDirection: 'column' }}>

          <div
            style={{
              backgroundColor: '#ebd5d5',
              width: 320,
              height: 327,
              marginLeft: 10,
              display: 'flex',
              flexDirection: 'column'
            }}>
            <p
              style={{
                fontSize: 10,
                background: 'white',
                height: 20,
                width: 150,
                textAlign: 'center',
                alignSelf: 'center',
                marginTop: 0,
              }}>
              enter your credentials below
            </p>
            <form style={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
              <input type="text" placeholder="username"
                style={{
                  backgroundColor: '#ebd5d5',
                  border: 'none',
                  outline: 0,
                  fontSize: 10,
                  textAlign: 'center',
                  marginTop: 50,
                }} />
              <hr
                style={{
                  borderRightWidth: 150,
                  borderRightColor: 'white',
                  marginTop: 20,
                }}
              />
              <input type="password" placeholder="password"
                style={{
                  backgroundColor: '#ebd5d5',
                  border: 'none',
                  outline: 0,
                  fontSize: 10,
                  textAlign: 'center',
                  marginTop: 20,
                }} />
              <hr
                style={{
                  borderRightWidth: 150,
                  borderRightColor: 'white',
                  marginTop: 20,
                }}
              />
              <button
                style={{
                  backgroundColor: '#ebd5d5',
                  border: 'none',
                  outline: 0,
                  fontSize: 10,
                  textAlign: 'center',
                  marginTop: 20,
                  color: '#948e8d',
                }} >
                sign in
            </button>
            </form>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <button style={{
                backgroundColor: '#ebd5d5',
                border: 'none',
                fontSize: 10,
                marginTop: 50,
                color: '#948e8d',
                marginLeft: 20
              }}>
                keep me logged in
            </button>
              <button style={{
                backgroundColor: '#ebd5d5',
                border: 'none',
                fontSize: 10,
                marginTop: 50,
                color: '#948e8d',
                marginRight: 20
              }}>
                sign up
            </button>
            </div>
          </div>

          <div
            style={{
              backgroundColor: '#4d4e4f',
              width: 320,
              height: 165,
              marginTop: 7,
              marginLeft: 10,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
              <a href={'http://exo-sehun.kr/bbs/zboard.php?id=data&category=2'}>
                <img src={picture_logo} style={{ height: 30, width: 30, tintColor: 'white' }} />
              </a>
              <a href={'http://exo-sehun.kr/bbs/zboard.php?id=data&category=3'}>
                <img src={play_logo} style={{ height: 30, width: 30, tintColor: 'white' }} />
              </a>
              <a href={'http://exo-sehun.kr/bbs/zboard.php?id=heart'}>
                <img src={locked_logo} style={{ height: 30, width: 30, tintColor: 'white' }} />
              </a>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>
              <a href={'http://exo-sehun.kr/bbs/zboard.php?id=memo'}>
                <img src={chat_logo} style={{ height: 30, width: 30, tintColor: 'white' }} />
              </a>
              <a href={'http://exo-sehun.kr/bbs/zboard.php?id=master'}>
                <img src={battery_logo} style={{ height: 30, width: 30, tintColor: 'white' }} />
              </a>
              <a href={'http://exo-sehun.kr/bbs/zboard.php?id=index'}>
                <img src={door_logo} style={{ height: 30, width: 30, tintColor: 'white' }} />
              </a>
            </div>
          </div>

        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginLeft: 10,
          }}>
          <div>
            <a href={'http://ohsehun.kr/2020/'}>
              <img src={nuhes_logo} style={{ height: 160, width: 320 }} />
            </a>
          </div>
          <div>
            <a href={'http://exo-sehun.kr/bbs/zboard.php?id=support'}>
              <img src={gift_logo} style={{ height: 160, width: 320, marginTop: 4 }} />
            </a>
          </div>
          <div>
            <a href={'https://www.youtube.com/c/iridescentboy_sh'}>
              <img src={yt_logo} style={{ height: 160, width: 320, marginTop: 4 }} />
            </a>
          </div>
        </div>
        <div
          style={{
            width: 320,
            height: 327,
            display: 'flex',
            flexDirection: 'column',
            marginLeft: 10,

          }}>
          <p
            style={{
              fontSize: 15,
              color: '#696661',
              height: 20,
              width: 150,
              textAlign: 'center',
              alignSelf: 'center',
              marginTop: 30,
            }}>
            last update
            </p>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 20,
            }}>
            <img src={sehun1_logo} style={{ marginBottom: 3 }} />
            <img src={sehun2_logo} style={{ marginBottom: 3 }} />
            <img src={sehun3_logo} />
          </div>
          <p
            style={{
              fontSize: 10,
              color: '#696661',
              height: 15,
              width: 150,
              textAlign: 'center',
              alignSelf: 'center',
              marginTop: 50,
            }}>
            more details
            </p>
        </div>
      </div>
    </div >
  );
}

export default App;
