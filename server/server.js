let express = require("express");
let app = express();
let port = 8000;
let Razorpay = require("razorpay");
let cors = require("cors")
///set Razorpay
let razorpay = new Razorpay({
    key_id: "rzp_test_TA7wMvsNqpS8Iz",
    key_secret: "mKKBujM7H0e5y4Q7D8gAWS3y",
});
//cors
app.use(express.json());
app.use(cors())
app.post("/order", async (req, res) => {
    try {
        let opt = {
            currency: req.body.cur,
            amount: req.body.data*10,
            receipt: "rec1"
        };
        let order = await razorpay.orders.create(opt);
        res.json(order);
    } catch (er) {
        console.log(er)
    }
});
app.post("/verify",(req,res)=>{
    console.log(req.body);
})








app.listen(port)
