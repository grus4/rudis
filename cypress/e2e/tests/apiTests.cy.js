describe('API testing', () => {
    const baseUrl = 'https://jsonplaceholder.typicode.com/posts';
    it('getting a list of post', () => {
        cy.api({
            url: `${baseUrl}`,
            method: 'GET',
        }).as('listOfPosts');

        cy.get('@listOfPosts').should(response => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.an('array');
            expect(response.body.length).to.be.greaterThan(0);
        });
    });

    it('returning a post by id', () => {
        const id = 3;
        cy.api({
            url: `${baseUrl}/${id}`,
            method: 'GET',
        }).as('postsById');

        cy.get('@postsById').should(response => {
            expect(response.status).to.eq(200);
            expect(response.body.id).to.eq(id);
            expect(response.body).to.have.keys([
                'userId',
                'title',
                'body',
                'id',
            ]);
        });
    });

    it('creating a new post', () => {
        const requestBody = {
            title: 'Some title',
            body: 'Test data',
            userId: 2,
        };

        cy.api({
            url: `${baseUrl}`,
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: requestBody,
        }).as('createPost');

        cy.get('@createPost').should(response => {
            expect(response.status).to.eq(201);
            expect(response.body).to.have.keys([
                'userId',
                'title',
                'body',
                'id',
            ]);
            expect(response.body).to.deep.equal({ ...requestBody, id: 101 });
        });
    });

    it('updating a post by id', () => {
        const updateRequestBody = {
            title: 'updated title',
            body: 'updated body',
            userId: 1,
        };

        const id = 4;

        cy.api({
            url: `${baseUrl}/${id}`,
            method: 'PUT',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: updateRequestBody,
        }).as('updatingReuest');

        cy.get('@updatingReuest').should(response => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.keys([
                'userId',
                'title',
                'body',
                'id',
            ]);
            expect(response.body).to.deep.equal({
                ...updateRequestBody,
                id: 4,
            });
        });
    });

    it('Updating a post by ID version using fixture', () => {
        cy.fixture('postData.json').then(postData => {
            cy.request('PUT', `${baseUrl}/4`, postData.updatePost).then(
                response => {
                    expect(response.status).to.eq(200);
                    expect(response.body).to.have.property(
                        'title',
                        postData.updatePost.title
                    );
                    expect(response.body).to.have.property(
                        'body',
                        postData.updatePost.body
                    );
                    expect(response.body).to.have.property(
                        'userId',
                        postData.updatePost.userId
                    );
                }
            );
        });
    });

    it('deleting a post by id', () => {
        const id = 1;
        cy.api({
            url: `${baseUrl}/${id}`,
            method: 'DELETE',
        }).as('deletePost');

        cy.get('@deletePost').should(response => {
            expect(response.status).to.eq(200);
        });
    });
});
