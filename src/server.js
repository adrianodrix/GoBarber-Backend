import app from './app';

app.listen(process.env.PORT || 3000, () => {
  console.clear();
  console.log('GoBarber Server Started');
});
