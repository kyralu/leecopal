import style from './GroupInfoPage.module.css';
import { Link, useParams } from 'react-router-dom';
import GroupDataDisplay from '../../components/GroupDataDisplay/GroupDataDisplay';

function GroupInfoPage() {
  let { id } = useParams();
  console.log(id);

  return (
    <div className={style.container}>
      <Link to="/group">Back to Group Page</Link>
      <h2>🕺🏻 NEU Study Group</h2>
      <GroupDataDisplay></GroupDataDisplay>
    </div>
  )
}

export default GroupInfoPage;