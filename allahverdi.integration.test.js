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
    const expectedNotFoundAddResult = {
        "message": "Invalid comment body"
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

    const expectedNotFoundUpdateResult = {
        "message": "Comment with id '-2' not found"
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

    const expectedNotDeleteResult = {
        "message": "Comment with id '-2' not found"
    }


    it("should not add body", () =>{
        return addComment('').then((data) => {
            expect(data).toEqual(expectedNotFoundAddResult)
        })
    })
       
    it("should add comment", () => {
        return addComment("This makes all sense to me!").then((data) => {
            expect(data).toEqual(expectedAddResult)
        })
    })

    it("should update comment", () => {
        return updateComment(1).then((data) => {
            expect(data).toEqual(expectedUpdateResult)
        })
    })

    it("should not update comment", () => {
        return updateComment(-2).then((data) => {
            expect(data).toEqual(expectedNotFoundUpdateResult)
        })
    })

    it("should delete comment", () => {
        return deleteComment(1).then((data) => {
            data["deletedOn"] = dataTime;
            expect(data).toEqual(expectedDeleteResult)
        })
    })

    it("should not delete comment", () => {
        return deleteComment(-2).then((data) => {
            expect(data).toEqual(expectedNotDeleteResult);
        })
    })

})

