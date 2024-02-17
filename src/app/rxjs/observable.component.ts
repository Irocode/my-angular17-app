import { Component, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { BehaviorSubject, Observable, Observer, Subject, Subscription, filter, map, interval, of } from 'rxjs';
import { Post } from './post.model';
import { PostService } from './post.service';
import { MatSort, Sort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
    selector: 'app-observable',
    templateUrl: './observable.component.html',


})
export class ObservableComponent implements OnInit {

    posts$: Observable<Post[]>;
    load: boolean = true;
    @ViewChild(MatSort) sort: MatSort;
    displayedColumns: string[] = ['id', 'title', 'body', 'userId'];
    dataSource = new MatTableDataSource<Post>();
    private _liveAnnouncer: any;


    constructor(private postService: PostService) { }

    ngOnInit(): void {
        this.load = true;
    }

    dataCall(): void {
        this.posts$ = this.postService.getPosts();
        this.load = false;

        this.dataSource.sort = this.sort;

        this.postService.getPosts().subscribe(posts => {
            this.dataSource.data = posts;
        });
    }

    dataKill(): void {
        this.load = true;
        this.posts$ = of([]);
    }


    /** Announce the change in sort state for assistive technology. */
    announceSortChange(sortState: Sort) {
        // This example uses English messages. If your application supports
        // multiple language, you would internationalize these strings.
        // Furthermore, you can customize the message to add additional
        // details about the values being sorted.
        if (sortState.direction) {
            this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
        } else {
            this._liveAnnouncer.announce('Sorting cleared');
        }

    }

}