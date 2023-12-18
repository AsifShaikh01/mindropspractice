import React, { useEffect, useState } from 'react'

const QuestionOnUseEffect = () => {
    const [data, setData] = useState(null);
    const fetchData = async () => {
        try {
          const response = await new Promise(resolve =>
            setTimeout(() => resolve({ data: "Sample data" }), 1000)
          );
          setData(response.data);
        } catch (error) {
          console.error(error);
        }
      };

    useEffect(() => {
        fetchData(); 
      }, []);
  return (
    <div>
      {data && <h1>Data: {data}</h1>}
    </div>
  )
}

export default QuestionOnUseEffect
