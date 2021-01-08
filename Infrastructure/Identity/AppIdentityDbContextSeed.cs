using Core.Entities.Identity;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Identity
{
    public class AppIdentityDbContextSeed
    {
        public static async Task SeedUserAsync(UserManager<AppUser> userManager)
        {
            if(!userManager.Users.Any())
            {
                var user = new AppUser
                {
                    DisplayName = "Cristi",
                    Email = "cristi@test.com",
                    UserName = "cristi@test.com",
                    Address = new Address
                    {
                        FirstName = "Cristi",
                        LastName = "Test",
                        Street = "Bd Tineretului 29",
                        City = "Bucuresti",
                        State = "Bucuresti",
                        Zipcode = "44123"

                    }
                };

                await userManager.CreateAsync(user, "Pa$$w0rd");
            }
        }
    }
}
