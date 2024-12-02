import express from "express";
import { User } from "../app/schema/user.schema.js";
import { appRouter } from "./app.route.js";
import { ServerError } from "../lib/errors.js";

// update user goals
router.post('/username/goals', async (req, res) => {
    const {username} = req.params;
    const {type, progress} = req.body;

    try {
        const user = await User.findOne({username});
        const goal = user.goal.find(g => g.type === type);
        if (goal) {
            goal.progress += progress;
            if (goal.progress >= goal.target) {
                goal. achieved = true;
            }
        } else {
            user.goal.push( {type, target: progress, achieved: progress >= goal.target});
        }

        await user.save()
        res.json(user)
    } catch (error) {
        res.staus(ServerError).json({message: error})
    }
});

export default router