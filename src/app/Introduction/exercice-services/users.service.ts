import { Injectable } from "@angular/core";
import { CounterService } from "./counter.service";

@Injectable({providedIn: 'root'})
export class UsersService {
    public users: {id: number, name: string, status: string}[] = [
        {id: 1, name: 'Max', status: 'active'},
        {id: 2, name: 'Anna', status: 'active'},
        {id: 3, name: 'Chris', status: 'inactive'},
        {id: 4, name: 'Manu', status: 'inactive'}
    ];

    constructor(private counterService: CounterService) {}

    public setActive(id: number) {
        this.setStatus(id, 'active');
    }

    public setInactive(id: number) {
        this.setStatus(id, 'inactive');
    }

    private setStatus(id: number, status: string) {
        const user = this.users.find(u => u.id === id);
        if(!user) return;
        user.status = status;
        this.counterService.addCount();
    }
}