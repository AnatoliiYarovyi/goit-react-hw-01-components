import Profile from './home-work/Ex1/components/Profile';
import user from './home-work/Ex1/user.json';
import Statistics from './home-work/Ex2/components/Statistics';
import statisticalData from './home-work/Ex2/statistical-data.json';
import FriendList from './home-work/Ex3/components/FriendList';
import friends from './home-work/Ex3/friends.json';
import TransactionHistory from './home-work/Ex4/components/TransactionHistory';
import transactions from './home-work/Ex4/transactions.json';
import Conteiner from './home-work/Container/Container';

function App() {
  return (
    <Conteiner>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory item={transactions} />
    </Conteiner>
  );
}

export default App;
