import { metadata } from './../src/app/layout';
export {}

export type Roles = "admin" | "moderator";

declare global{
    interface customJwtSessionClaims{
        metadata:{
            role?: Roles;
        }
    }
}