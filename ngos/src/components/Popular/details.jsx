import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function DetailPage() {

    const { title } = useParams();  // Get the topic from the URL
    const [data, setData] = useState(null);
    const topic =title 
  
    useEffect(() => {
      // Fetch data based on the topic (replace with actual data fetch logic)
      const fetchData = async () => {
        try {
          const response = await fetch('/Data/ourWork.json');
          const jsonData = await response.json();
        //   const jsonData = await response.json();
        const result = await jsonData.find((e) => e.title === title);
         console.log(result)
          setData(result)
        //   if (jsonData.title === topic) {
        //     setData(jsonData);  // Match the topic and set the data
        //   }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, [title]);


  console.log(data?.img)

    return (<>
    <div>
        <div className="max-w-7xl m-auto py-20 ">
            
        <div className="flex place-content-center place-items-center"><img className="h-[500px] w-3/4" src={data?.img} alt="" /></div>
        <div className="text-center text-6xl max-w-4xl font-semibold pt-16 m-auto text-main4" >{data?.title}</div>
        <div className="max-w-5xl m-auto text-lg font-medium py-10 leading-loose">
  {data?.Info
    .split(' ') // Split the text into an array of words
    .reduce((acc, word, index, array) => {
      // Add word to current chunk
      if (!acc[acc.length - 1]) acc.push([]);
      acc[acc.length - 1].push(word);

      // Check if we've reached 25 words or a sentence-ending punctuation (.!?)
      if ((acc[acc.length - 1].length === 50) || /[.!?]/.test(word)) {
        // If the last word is a punctuation, create a new paragraph after it
        if (/[.!?]/.test(word)) {
          acc.push([]); // Start a new paragraph chunk
        }
      }
      
      return acc;
    }, [])
    .map((chunk, index) => (
      <p key={index} className="py-2">{chunk.join(' ')}</p>
    ))}
</div>


        </div>
        
    </div>
    
    </>  );
}

export default DetailPage;