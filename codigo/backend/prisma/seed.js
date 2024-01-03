import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient()

async function main() {

    await prisma.user.create({
        data: {
            idUser: 1,
            fullName: "Abner Silva",
            email: "teste@teste.com",
            password: "123456",
            subName: "@teste",
            idManager: 1,
            isManager: true,
        }
    })

    await prisma.user.create({
        data: {
            idUser: 2,
            fullName: "Abner Silva 2",
            email: "teste@teste1.com",
            password: "123456",
            subName: "@teste2",
            idManager: 1,
            isManager: true,
        }
    })

    await prisma.post.create({
        data: {
            idPost: 1,
            article: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            idUser: 1,
            image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            qntLikes: 0,
            time: new Date(),
            downs: 0,
            ups: 0
        }
    })

    await prisma.post.create({
        data: {
            idPost: 2,
            article: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            idUser: 2,
            image: "https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
            qntLikes: 0,
            time: new Date(),
            downs: 0,
            ups: 0
        }
    })

    await prisma.techs.create({
        data: {
            idTag: 1,
            techName: "HTML",
        }
    })

    await prisma.techs.create({
        data: {
            idTag: 2,
            techName: "CSS"
        }
    })

    await prisma.techs.create({
        data: {
            idTag: 3,
            techName: "JS"
        }
    })

    await prisma.techs.create({
        data: {
            idTag: 4,
            techName: "React"
        }
    })

    await prisma.techs.create({
        data: {
            idTag: 5,
            techName: "Python"
        }
    })

    await prisma.comment.create({
        data: {
            idComment: 1,
            comment: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. 😎",
            idPost: 1,
            idUser: 2,
        }
    })

    await prisma.comment.create({
        data: {
            idComment: 2,
            comment: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. 😁",
            idPost: 2,
            idUser: 1,
        }
    })

    await prisma.postsTags.create({
        data: {
            idPost: 1,
            idTag: 1,
        }
    })

    await prisma.postsTags.create({
        data: {
            idPost: 1,
            idTag: 2,
        }
    })

    await prisma.postsTags.create({
        data: {
            idPost: 1,
            idTag: 3,
        }
    })

    await prisma.postsTags.create({
        data: {
            idPost: 2,
            idTag: 4,
        }
    })

    await prisma.postsTags.create({
        data: {
            idPost: 2,
            idTag: 5,
        }
    })

    await prisma.userTags.create({
        data: {
            idUser: 1,
            idTag: 1,
            level: 5
        }
    })

    await prisma.userTags.create({
        data: {
            idUser: 1,
            idTag: 2,
            level: 4
        }
    })


    await prisma.userTags.create({
        data: {
            idUser: 1,
            idTag: 3,
            level: 3
        }
    })


    await prisma.userTags.create({
        data: {
            idUser: 2,
            idTag: 4,
            level: 5
        }
    })

    await prisma.userTags.create({
        data: {
            idUser: 2,
            idTag: 5,
            level: 5
        }
    })

    await prisma.rankUser.create({
        data: {
            idUser: 1,
            points: 50
        }
    })

    await prisma.rankUser.create({
        data: {
            idUser: 2,
            points: 40
        }
    })

}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });