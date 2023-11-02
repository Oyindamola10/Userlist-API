import {useState, useEffect} from "react";
import UserListCard from "./UserListCard";



const UserList = () => {
    const[userlist, setUserList] = useState(null);
    const[userlistData, setUserListData] = useState(null);

    //fetch data to github api
    const fetchData = async() =>{
        const response = await fetch("http://api.github.com/users");

        const data = await response.json();
        setUserList(data);
        setUserListData(data);
    }
    useEffect(() => {
        fetchData();
    }, []);

    //search form management
    const [searchText, setSearchText] = useState("");

    //filter userlist based on search text
    const filteredUserlist = userlist?.filter(({login}) => {
        return login.toLowerCase().includes(searchText.toLowerCase());
    });

    //filter userlist based on search text
    const handleSearch = (event) => {
        event.preventDefault();
        setUserListData(filteredUserlist);
    };

    return (
        <>
        <div className="searchForm">
          <form>
            <input type="text" placeholder="search" value={searchText} onChange={(event) => setSearchText(event.target.value)}/>
            <button type="type" onClick={handleSearch}>Search</button>
          </form>
        </div>
        <div className="grid">
            {userlistData?.map (({login, id, avatar_url}) => {
               return(
                <UserListCard 
                key={id}
                username={login}
                image={avatar_url}
                />
               );
            })};
        </div>
        </>
    );
}

export default UserList;