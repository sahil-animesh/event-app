import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { DocumentNode, ExecutionResult } from 'graphql';
import { Observable } from 'rxjs';
import { ApolloQueryResult } from '@apollo/client/core';

@Injectable({
  providedIn: 'root',
})
export class GraphqlService {
  constructor(private apollo: Apollo) {}

  query<T>(query: DocumentNode, variables?: any): Observable<ApolloQueryResult<T>> {
    return this.apollo.query<T>({
      query,
      variables,
    });
  }

  mutate<T>(mutation: DocumentNode, variables?: any): Observable<ExecutionResult<{ data: T | null | undefined }>> {
    return this.apollo.mutate<{ data: T | null | undefined }>({
      mutation,
      variables,
    });
  }

}
