import { StyleSheet, View, FlatList, RefreshControl } from "react-native";

import { useQuery } from "@tanstack/react-query";
import { fetchMessages } from "@/utils/api";
import { MessageItem } from "@/components/messages/MessageItem";
import { EmptyState } from "@/components/common/EmptyState";
import { ErrorState } from "@/components/common/ErrorState";
import { FAB } from "@/components/fab/fab";

const Page = () => {
  const {
    data: messages,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["messages"],
    queryFn: fetchMessages,
  });

  if (isError) {
    return <ErrorState onRetry={refetch} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={messages?.data}
        renderItem={({ item }) => <MessageItem message={item} />}
        keyExtractor={(item) => item.id.toString()}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={refetch} />
        }
        ListEmptyComponent={
          <>{!isLoading && <EmptyState message="No messages yet" />}</>
        }
        contentContainerStyle={styles.listContent}
      />

      <FAB />
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContent: {
    padding: 16,
  },
});
