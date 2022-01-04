<script>
let now = new Date();
let percent = computePercent();
setInterval(() => {
  percent = computePercent();
}, 1000 * 60);

const year = now.getFullYear();
function computePercent() {
  now = new Date();
  const start = new Date(now.getFullYear(), 0, 1);
  const end = new Date(now.getFullYear() + 1, 0, 1);
  return ((now - start) / (end - start) * 100).toFixed(2);
}
</script>

<div class="progress" >
  <div class="progress-bar" style="min-width: {percent}vw">
    {percent}% of {year}
  </div>
</div>
<style>
.progress {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 20px;
}
.progress-bar {
  position: absolute;
  left: 0;
  bottom: 0;
  text-align: center;
  font-size: 10px;
  line-height: 20px;
  background-color: rgb(211, 54, 130);
}
</style>
