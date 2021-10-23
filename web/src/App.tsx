import { useContext } from 'react';
import styles from './App.module.scss';
import { LoginBox } from './componets/LoginBox';
import { MessageList } from './componets/MessageList';
import { SendMessageForm } from './componets/SendMessageForm';
import { AuthContext } from './context/auth';


export function App() {
  const { user } = useContext(AuthContext);

    return (
<main className={`${styles.contentWrapper} ${!!user ? styles.contetSigned : ''} `}>
<MessageList />
  { !!user ? <SendMessageForm/> : <LoginBox/> }

</main>
    )
  }
   

 
