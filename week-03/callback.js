function doJob(job, time, cb) {
  setTimeout(() => {
    let now = new Date();
    cb(`完成工作 ${job} at ${now.toISOString()}`);
  }, time);
}

// 刷牙 1sec -> 吃早餐 3 sec -> 寫功課 1sec -> 吃午餐 2sec
let now = new Date();
console.log(`開始工作 at ${now.toISOString()}`);

doJob('刷牙', 1000, function (data) {
  // 表示 doJob 做完了
  console.log(data);
  doJob('吃早餐', 3000, function (data) {
    // 表示 doJob 做完了
    console.log(data);
    doJob('寫功課', 1000, function (data) {
      // 表示 doJob 做完了
      console.log(data);
      doJob('吃午餐', 2000, function (data) {
        // 表示 doJob 做完了
        console.log(data);
      });
    });
  });
});
