export const fetchApplications = async () => {
    const response = await fetch('http://interviewscope.sandbox.kyc-chain.com/integrations/v3/scope/667ac4a1979c90daff3863ca/applications', {
        headers: {
            'apiKey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2N2FjNGQ4MWE3YWFlOTM4OWYwYmU1MiIsInJvbGVzIjpbeyJfaWQiOiI2NjdhYzRlODk3OWM5MGRhZmYzODZkMmMiLCJuYW1lIjoiQmFzaWMgQ2FuZGlkYXRlIiwicGVybWlzc2lvbnMiOlsidmlld19hcGlrZXlzIiwidmlld19kYXNoYm9hcmQiLCJ2aWV3X2NvcnBvcmF0ZSIsInZpZXdfaW5kaXZpZHVhbCJdLCJpbnRlcm5hbCI6ZmFsc2UsImxvY2tlZCI6ZmFsc2UsInNjb3BlIjoiNjY3YWM0YTE5NzljOTBkYWZmMzg2M2NhIiwiY3JlYXRlZEF0IjoiMjAyNC0wNi0yNVQxMzoyMzo1Mi41NjFaIiwidXBkYXRlZEF0IjoiMjAyNC0wNi0yNVQxMzoyNjo1My40NjdaIiwiX192IjowfV0sInNjb3BlcyI6WyI2NjdhYzRhMTk3OWM5MGRhZmYzODYzY2EiXSwia2V5SWQiOiI2NjdhYzViMjlmNDA3OTc1MmNkY2I3YmIiLCJpYXQiOjE3MTkzMjIwMzQsImV4cCI6MTc1MDg1ODAzNCwiYXVkIjoiYXBpa2V5IiwiaXNzIjoia3ljYy1zYW5kYm94LW11bHRpc2NvcGVfNjY3YWM0YTE5NzljOTBkYWZmMzg2M2NhIiwic3ViIjoiNjY3YWM0ZDgxYTdhYWU5Mzg5ZjBiZTUyIn0.EuhXvmjVeAWNouhBU0UqpfOGRAwWjaZKaOMmL2H9zMo',
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
};