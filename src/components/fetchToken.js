const endPoint = "https://prod-in2.100ms.live/hmsapi/googlemeet.app.100ms.live/";

const fetchToken = async (user_id) => {
  const response = await fetch(`${endPoint}api/token`, {
    method: "POST",
    body: JSON.stringify({
      user_id,
      role: "host", //host, guest
      room_id: "6288c1d9b873787aa26f06f0"
    })
  });
  const { token } = await response.json();
  return token;
};
export default fetchToken;