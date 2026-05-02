const axios = require('axios');

async function Log(stack, level, package, message) {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJ2bTI2MjBAc3JtaXN0LmVkdS5pbiIsImV4cCI6MTc3NzcwMjIzMSwiaWF0IjoxNzc3NzAxMzMxLCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiMmE5YzRkNzMtMjQ2Zi00OTM1LTg5NTUtZmJkOGY2MTdiNmJkIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoibXVtbWlkaXZhcmFwdSB2ZW5rYXRhIHNhaSBoYXJzaGl0aCIsInN1YiI6ImUxMWI3YTU2LTgyNTItNDhjNi05NWRhLTVhNGYwMjk3ZmEyNyJ9LCJlbWFpbCI6InZtMjYyMEBzcm1pc3QuZWR1LmluIiwibmFtZSI6Im11bW1pZGl2YXJhcHUgdmVua2F0YSBzYWkgaGFyc2hpdGgiLCJyb2xsTm8iOiJyYTIzMTEwMDMwMTExOTYiLCJhY2Nlc3NDb2RlIjoiUWticHhIIiwiY2xpZW50SUQiOiJlMTFiN2E1Ni04MjUyLTQ4YzYtOTVkYS01YTRmMDI5N2ZhMjciLCJjbGllbnRTZWNyZXQiOiJnbU5kdkNoc3F3cHFDUlBNIn0.Q_Nz5z2C3RkujR3a7tujppKS2Co9ME-GAUPtYQS1unE';
    const url = 'http://20.207.122.201/evaluation-service/logs';

    try {
        await axios.post(url, {
            stack: stack,
            level: level,
            package: package,
            message: message
        }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    } catch (error) {
        console.error('Logging failed:', error);
    }
}

module.exports = Log;