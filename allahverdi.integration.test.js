const {addComment, updateComment, deleteComment} = require("./allahverdi.integration");

describe.only('addComment', () => {

    const expectedAddResult = {
        "id": 341,
        "body": "This makes all sense to me!",
        "postId": 3,
        "user": {
          "id": 5,
          "username": "kmeus4"
        }
    }

    const expectedUpdateResult = {
        "id": 1,
        "body": "Updated Datas",
        "postId": 100,
        "user": {
          "id": 63,
          "username": "eburras1q"
        }
    }

    let dataTime = new Date().toISOString();
    const expectedDeleteResult = {
        "id": 1,
        "body": "This is some awesome thinking!",
        "postId": 100,
        "user": {
            "id": 63,
            "username": "eburras1q"
        },
        "isDeleted": true,
        "deletedOn": dataTime,
    }
    
    it("should delete comment", () => {
        return deleteComment().then((data) => {
            data["deletedOn"] = dataTime;
            expect(data).toEqual(expectedDeleteResult)
        })
    })
       

    it("should add comment", () => {
        return addComment().then((data) => {
            expect(data).toEqual(expectedAddResult)
        })
    })

    it("should update comment", () => {
        return updateComment().then((data) => {
            expect(data).toEqual(expectedUpdateResult)
        })
    })


})

