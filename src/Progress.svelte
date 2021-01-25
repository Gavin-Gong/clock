<script>
import dayjs from "dayjs"
const percent = (dayjs().unix() / (365 * 24 * 60 * 60 * 1000) * 100).toFixed(2)
const year = dayjs().year()
</script>

<div class="progress" >
  <div class="progress-bar" style="width: {percent}vw">
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