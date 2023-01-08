import React, {useEffect} from 'react';

function Oauth(props)
{
    const {setToken} = props;

    const key = "GxLzquLR5oBWNSbjn8nfGsG0rEyeJxUsylVXNhhYrNua9vTgj7";
    const secret = "Ka1uhcYnnngVK8ZIHSYQWRwLEMnY66XFuVwPMUI8";

    useEffect(() =>
    {
        fetch('https://api.petfinder.com/v2/oauth2/token', {
            method: 'POST',
            body: 'grant_type=client_credentials&client_id=' + key + '&client_secret=' + secret,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        .then(req => req.json())
        .then(data => setToken(data.access_token));
    }, []);
}

export default Oauth;