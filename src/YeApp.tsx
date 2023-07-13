import { useEffect, useState } from "react";

interface Quote {
  quote: string;
}

export function YeApp() {
  const [quote, setQoute] = useState<Quote>();

  useEffect(() => {
    const fetchQoute = async () => {
      const response = await fetch("https://api.kanye.rest/");
      const jsonBody: { quote: string } = await response.json();
      setQoute(jsonBody);
    };

    fetchQoute();

  }, []);

  return (
    <>
      <h1>Ye App</h1>
      {quote && (
        <p>
          <i>{quote.quote}</i>
        </p>
      )}
    </>
  );
}
