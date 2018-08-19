import { Component, Input } from '@angular/core';
import { ChangeLog } from '../';
@Component ({
    selector: 'portfolio-changelog',
    templateUrl: './changelog.component.html'
})

export class ChangelogComponent {
    @Input() public changelog: ChangeLog;
}
