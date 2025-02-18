
export const generateData = () => {
    const data = [];
    const startTime = new Date("2025-02-01T00:00:00.000Z"); // Thời điểm bắt đầu
  
    for (let i = 1; i <= 100; i++) {
      const temperature = (Math.random() * 40).toFixed(2); // Nhiệt độ từ 0 đến 40 °C
      const humidity = (Math.random() * 100).toFixed(2); // Độ ẩm từ 0 đến 100 %
      const light = (Math.random() * 1000).toFixed(2); // Ánh sáng từ 0 đến 1000 Lux
  
      // Tăng thời gian theo từng bản ghi (ví dụ: mỗi bản ghi cách nhau 1 giờ)
      const time = new Date(startTime.getTime() + i * 60 * 60 * 1000);
      
      // Định dạng lại thời gian theo kiểu "YYYY-MM-DD HH:mm"
      const formattedTime = time.getFullYear() + '-' +
        ('0' + (time.getMonth() + 1)).slice(-2) + '-' +
        ('0' + time.getDate()).slice(-2) + ' ' +
        ('0' + time.getHours()).slice(-2) + ':' +
        ('0' + time.getMinutes()).slice(-2);
  
      data.push({
        id: i,
        temperature: parseFloat(temperature),
        humidity: parseFloat(humidity),
        light: parseFloat(light),
        time: formattedTime,
      });
    }
    return data;
  };

