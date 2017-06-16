RSpec.describe UsersController, :type => :controller do
    describe "POST #create" do

        context "with invalid params" do
            it "validates the presence of name, email, and password" do
                post :create, user: {name: "this is an invalid user"}
                # expect(response).to render_template("show")
                expect(flash[:errors]).to be_present
            end
        end

        context "with valid params" do
            it "redirects to the link show page" do
                post :create, user: {name: "Name Test", email: "nametest@gmail.com", password: "password"}
                expect(response).to render_template("show")
            end
        end
    end

end