import { useState } from 'react'
import axios from 'axios'
import './App.css'

interface User {
  id: number;
  name: string;
  email: string;
  username: string;
}

function App() {
  const [userData, setUserData] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchData = async () => {
    setLoading(true);
    setError('');
    
    try {
      const response = await axios.get('http://13.203.105.84:5000/api/data');
      setUserData(response.data.data);
    } catch (err) {
      console.error('Error fetching data:', err);
      setError('Failed to fetch data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>AWS Hosting Demo</h1>
      <p>Simple fullstack app for AWS deployment learning</p>
      
      <button 
        onClick={fetchData} 
        disabled={loading}
        className="fetch-button"
      >
        {loading ? 'Loading...' : 'Fetch Data from Backend'}
      </button>
      
      {error && <p className="error">{error}</p>}
      
      {userData.length > 0 && (
        <div className="users">
          {userData.map(user => (
            <div key={user.id} className="user-card">
              <h3>{user.name}</h3>
              <p>Username: {user.username}</p>
              <p>Email: {user.email}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default App
