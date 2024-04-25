import FriendListItem from "./FriendListItem";
export default function FriendList({ friends }) {
  <ul>
    {friends.map((friend) => (
      <li key={friend.id}>
        <FriendListItem friends={friend} />
      </li>
    ))}
  </ul>;
}
