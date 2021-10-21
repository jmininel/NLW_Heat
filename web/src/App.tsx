import styles from './App.module.scss';
import { LoginBox } from './componets/LoginBox';
import { MessageList } from './componets/MessageList';


export function App() {
    return (
<main className={styles.contentWrapper}>
<MessageList />
<LoginBox />

</main>
    )
  }
   

 
