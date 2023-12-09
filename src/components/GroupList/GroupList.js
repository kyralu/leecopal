import GroupCard from '../GroupCard/GroupCard';
import './GroupList.css';

export default function GroupList(props) {
  
  return (
    <div className="group-list">
        {props.groups.map((group) => (
          <div className="group" key={group.id}>
            <GroupCard key={group.id} group={group} />
          </div>
        ))}
    </div>
  );
}