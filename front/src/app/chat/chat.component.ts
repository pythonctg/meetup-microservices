import { Component, OnInit, ViewChild, ViewChildren, Input, OnDestroy } from "@angular/core";
import { PerfectScrollbarDirective } from "ngx-perfect-scrollbar";
import { ChatService, ChatCollection, User, Chat } from "../services/chat.service";
import { NgForm } from "@angular/forms";
import { Subscription } from 'rxjs';
@Component({
  selector: 'chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {

}